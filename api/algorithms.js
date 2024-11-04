// api/algorithms.js
export default function handler(req, res) {
    if (req.method === 'GET') {
        const algorithmsData = [
            { name: 'Algorithm 1', formula: 'x + y', calculations: 10, accuracy: 0.95 },
            { name: 'Algorithm 2', formula: 'x * y', calculations: 15, accuracy: 0.90 },
            // Add more algorithm objects here as needed
        ];
        res.status(200).json(algorithmsData); // Return the algorithms data as JSON
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
