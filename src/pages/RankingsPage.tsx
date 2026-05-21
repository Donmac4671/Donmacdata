import AdminLayout from "../layouts/AdminLayout";

export default function RankingPage() {
  const rankings = [
    {
      id: 1,
      position: 1,
      name:
        "Kwame Mensah",
      phone:
        "0551234567",
      email:
        "kwame@gmail.com",
      capacity:
        "200GB",
      revenue:
        "GH₵12,400",
    },

    {
      id: 2,
      position: 2,
      name:
        "Ama Serwaa",
      phone:
        "0201111111",
      email:
        "ama@gmail.com",
      capacity:
        "180GB",
      revenue:
        "GH₵10,200",
    },
  ];

  return (
    <AdminLayout>
      <div>
        <h1
          style={{
            fontSize:
              "38px",
            fontWeight:
              "900",
            marginBottom:
              "10px",
          }}
        >
          Rankings
        </h1>

        <p
          style={{
            color:
              "#94a3b8",
            marginBottom:
              "30px",
          }}
        >
          Top performing
          resellers
        </p>

        <div
          style={{
            overflowX:
              "auto",
          }}
        >
          <table
            style={{
              width:
                "100%",
              borderCollapse:
                "collapse",
              minWidth:
                "900px",
            }}
          >
            <thead>
              <tr
                style={{
                  background:
                    "#111827",
                }}
              >
                {[
                  "Position",
                  "Name",
                  "Phone",
                  "Email",
                  "Total Capacity",
                  "Revenue",
                ].map(
                  (
                    item
                  ) => (
                    <th
                      key={
                        item
                      }
                      style={{
                        padding:
                          "18px",
                        textAlign:
                          "left",
                      }}
                    >
                      {
                        item
                      }
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {rankings.map(
                (
                  item
                ) => (
                  <tr
                    key={
                      item.id
                    }
                    style={{
                      borderBottom:
                        "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <td
                      style={
                        tdStyle
                      }
                    >
                      #
                      {
                        item.position
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        item.name
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        item.phone
                      }
                    </td>

                    <td
                      style={
                        tdStyle
                      }
                    >
                      {
                        item.email
                      }
                    </td>

                    <td
                      style={{
                        ...tdStyle,
                        color:
                          "#38bdf8",
                        fontWeight:
                          "800",
                      }}
                    >
                      {
                        item.capacity
                      }
                    </td>

                    <td
                      style={{
                        ...tdStyle,
                        color:
                          "#22c55e",
                        fontWeight:
                          "800",
                      }}
                    >
                      {
                        item.revenue
                      }
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

const tdStyle = {
  padding: "18px",
};
