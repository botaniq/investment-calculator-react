import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);

  const { valueEndOfYear, annualInvestment, interest } = resultsData[0];
  const initialInvestment = valueEndOfYear - interest - annualInvestment;

  console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map(
          ({ year, valueEndOfYear, annualInvestment, interest }) => {
            const totalInterest =
              valueEndOfYear - annualInvestment * year - initialInvestment;

            const totalAnnualInvestment = valueEndOfYear - totalInterest;
            return (
              <tr key={year}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAnnualInvestment)}</td>
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  );
}
