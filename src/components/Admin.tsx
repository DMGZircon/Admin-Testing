import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, TextField } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

// Define interfaces for the data structures
interface AlgorithmData {
    name: string;
    formula: string;
    calculations: string;
    accuracy: number;
    precision: number;
    recall: number;
}

interface HistoryData {
    postID: string;
    date: string;
    overallResult: string;
}

interface TopPostData {
    postID: string;
    score: number;
}

interface WeeklyPostData {
    labels: string[];
    data: number[];
}

const AdminPage = () => {
    const [algorithms, setAlgorithms] = useState<AlgorithmData[]>([]);
    const [history, setHistory] = useState<HistoryData[]>([]);
    const [topPosts, setTopPosts] = useState<TopPostData[]>([]);
    const [weeklyPostData, setWeeklyPostData] = useState<WeeklyPostData>({ labels: [], data: [] });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            fetchAdminData();
        }
    }, [isAuthenticated]);

    const fetchAdminData = async () => {
        try {
            const [algorithmsRes, historyRes, topPostsRes, weeklyDataRes] = await Promise.all([
                axios.get<AlgorithmData[]>('/api/admin/algorithms'),
                axios.get<HistoryData[]>('/api/admin/history'),
                axios.get<TopPostData[]>('/api/admin/top-posts'),
                axios.get<WeeklyPostData>('/api/admin/weekly-posts')
            ]);
            setAlgorithms(algorithmsRes.data);
            setHistory(historyRes.data);
            setTopPosts(topPostsRes.data);
            setWeeklyPostData(weeklyDataRes.data);
        } catch (error) {
            console.error('Error fetching admin data', error);
        }
    };

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect username or password.");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUsername('');
        setPassword('');
        navigate('/');
    };

    if (!isAuthenticated) {
        return (
            <Box>
                <h2>Admin Login</h2>
                <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" onClick={handleLogin}>Login</Button>
            </Box>
        );
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Button variant="contained" color="error" onClick={handleLogout}>Logout</Button>
            
            {/* Algorithm Details */}
            <h2>Algorithm Details</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Algorithm</TableCell>
                            <TableCell>Formula</TableCell>
                            <TableCell>Calculations</TableCell>
                            <TableCell>Accuracy</TableCell>
                            <TableCell>Precision</TableCell>
                            <TableCell>Recall</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {algorithms.map((alg, index) => (
                            <TableRow key={index}>
                                <TableCell>{alg.name}</TableCell>
                                <TableCell>{alg.formula}</TableCell>
                                <TableCell>{alg.calculations}</TableCell>
                                <TableCell>{alg.accuracy}</TableCell>
                                <TableCell>{alg.precision}</TableCell>
                                <TableCell>{alg.recall}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Post History */}
            <h2>Post History</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Post ID</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Overall Result</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {history.map((post, index) => (
                            <TableRow key={index}>
                                <TableCell>{post.postID}</TableCell>
                                <TableCell>{post.date}</TableCell>
                                <TableCell>{post.overallResult}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Top Posts */}
            <h2>Top 10 Posts</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Post ID</TableCell>
                            <TableCell>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {topPosts.map((post, index) => (
                            <TableRow key={index}>
                                <TableCell>{post.postID}</TableCell>
                                <TableCell>{post.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Weekly Posts Graph */}
            <h2>Posts per Week</h2>
            <Bar
                data={{
                    labels: weeklyPostData.labels,
                    datasets: [{
                        label: 'Posts per Week',
                        data: weeklyPostData.data,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                }}
                options={{
                    scales: {
                        y: { beginAtZero: true }
                    }
                }}
            />
        </div>
    );
};

export default AdminPage;
