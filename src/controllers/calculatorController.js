import calculatorService from '../services/calculatorService.js';

export const calculate = (req, res) => {
    console.log('Controller: calculateController | function: calculate | payload:', JSON.stringify(req.body))

    const { expression } = req.body;    
    try {
        const result = calculatorService.evaluate(expression);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
