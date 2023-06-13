const KoreaLightPollutionTable = ({ resData }) => {
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th style={{ width: "150px", textAlign: "center" }}>Year</th>
              <th style={{ width: "150px", textAlign: "center" }}>Sum</th>
              <th style={{ width: "150px", textAlign: "center" }}>Mean</th>
            </tr>
          </thead>
          <tbody>
            {resData.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td>{data.year}</td>
                  <td>{data.sum.toLocaleString()}</td>
                  <td>{data.mean}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default KoreaLightPollutionTable;
