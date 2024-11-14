import calculatorService from '../services/calculatorService.js';

export const calculate = (req, res) => {
    const { expression } = req.body;
    try {
        const result = calculatorService.evaluate(expression);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
