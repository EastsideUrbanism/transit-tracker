import React from "react"

interface Agency {
  name: string
  area: string
  realTime: boolean | false
}

interface Region {
  region: string
  agencies: Agency[]
}

const agencies: Region[] = [
  {
    region: "Arizona, USA",
    agencies: [
      {
        name: "Valley Metro",
        area: "Phoenix, AZ",
        realTime: true,
      },
    ],
  },
  {
    region: "California, USA",
    agencies: [
      {
        name: "North County Transit District",
        area: "San Diego County, CA",
        realTime: true,
      },
      {
        name: "San Diego Metropolitan Transit System (MTS)",
        area: "San Diego, CA",
        realTime: true,
      },
    ],
  },
  {
    region: "Colorado, USA",
    agencies: [
      {
        name: "Regional Transportation District (RTD)",
        area: "Denver, CO",
        realTime: true,
      },
    ],
  },
  {
    region: "Georgia, USA",
    agencies: [{ name: "MARTA", area: "Atlanta, GA", realTime: true }],
  },
  {
    region: "Illinois, USA",
    agencies: [
      {
        name: "Chicago Transit Authority (CTA)",
        area: "Chicago, IL",
        realTime: false,
      },
      { name: "Metra", area: "Chicago, IL", realTime: true },
    ],
  },
  {
    region: "Massachusetts, USA",
    agencies: [
      {
        name: "Massachusetts Bay Transportation Authority (MBTA)",
        area: "Boston, MA",
        realTime: true,
      },
      {
        name: "Pioneer Valley Transit Authority (PVTA)",
        area: "Springfield, MA",
        realTime: true,
      },
    ],
  },
  {
    region: "New Jersey, USA",
    agencies: [{ name: "NJ Transit", area: "New Jersey", realTime: false }],
  },
  {
    region: "New York, USA",
    agencies: [
      { name: "MTA Buses", area: "New York City, NY", realTime: true },
      { name: "NYC Subway", area: "New York City, NY", realTime: true },
      { name: "NYC Ferry", area: "New York City, NY", realTime: true },
    ],
  },
  {
    region: "Oregon, USA",
    agencies: [
      { name: "TriMet", area: "Portland Metro, OR", realTime: true },
      { name: "Portland Streetcar", area: "Portland, OR", realTime: true },
    ],
  },
  {
    region: "Pennsylvania, USA",
    agencies: [{ name: "SEPTA", area: "Philadelphia, PA", realTime: true }],
  },
  {
    region: "Texas, USA",
    agencies: [
      {
        name: "Dallas Area Rapid Transit (DART)",
        area: "Dallas, TX",
        realTime: false,
      },
      { name: "Houston METRO", area: "Houston, TX", realTime: true },
    ],
  },
  {
    region: "Virginia, USA",
    agencies: [{ name: "DASH", area: "Alexandria, VA", realTime: true }],
  },
  {
    region: "Washington, D.C., USA",
    agencies: [
      {
        name: "Washington Metropolitan Area Transit Authority (WMATA)",
        area: "Washington, D.C.",
        realTime: true,
      },
    ],
  },
  {
    region: "Washington, USA",
    agencies: [
      { name: "King County Metro", area: "King County, WA", realTime: true },
      { name: "Sound Transit", area: "Seattle Metro Area", realTime: true },
      { name: "Pierce Transit", area: "Pierce County, WA", realTime: true },
      {
        name: "Community Transit",
        area: "Snohomish County, WA",
        realTime: true,
      },
      {
        name: "Intercity Transit",
        area: "Thurston County, WA",
        realTime: true,
      },
      { name: "Washington State Ferries", area: "Washington", realTime: true },
      { name: "Seattle Center Monorail", area: "Seattle, WA", realTime: true },
      { name: "Everett Transit", area: "Everett, WA", realTime: true },
      { name: "Kitsap Transit", area: "Kitsap County, WA", realTime: true },
      { name: "Link Transit", area: "Wenatchee, WA", realTime: true },
      {
        name: "Whatcom Transportation Authority",
        area: "Whatcom County, WA",
        realTime: true,
      },
      { name: "C-TRAN", area: "Clark County, WA", realTime: false },
    ],
  },
  {
    region: "Wisconsin, USA",
    agencies: [
      { name: "City of Madison Metro", area: "Madison, WI", realTime: true },
      {
        name: "Milwaukee County Transit System (MCTS)",
        area: "Milwaukee, WI",
        realTime: true,
      },
    ],
  },
  {
    region: "USA",
    agencies: [{ name: "Amtrak", area: "United States", realTime: true }],
  },
  {
    region: "Alberta, Canada",
    agencies: [
      {
        name: "Edmonton Transit System (ETS)",
        area: "Edmonton, AB",
        realTime: true,
      },
    ],
  },
  {
    region: "British Columbia, Canada",
    agencies: [
      { name: "TransLink", area: "Metro Vancouver, BC", realTime: true },
    ],
  },
  {
    region: "Manitoba, Canada",
    agencies: [
      { name: "Winnipeg Transit", area: "Winnipeg, MB", realTime: false },
    ],
  },
  {
    region: "Ontario, Canada",
    agencies: [
      { name: "OC Transpo", area: "Ottawa, ON", realTime: true },
      {
        name: "Toronto Transit Commission (TTC)",
        area: "Toronto, ON",
        realTime: true,
      },
    ],
  },
  {
    region: "Québec, Canada",
    agencies: [
      {
        name: "Société de transport de Montréal (STM)",
        area: "Montréal, QC",
        realTime: true,
      },
      {
        name: "Réseau de transport de la Capitale (RTC)",
        area: "Québec City, QC",
        realTime: true,
      },
    ],
  },
  {
    region: "Europe",
    agencies: [
      { name: "Ilévia", area: "Lille, France", realTime: true },
      {
        name: "Verkehrsverbund Berlin-Brandenburg (VBB)",
        area: "Berlin-Brandenburg, Germany",
        realTime: false,
      },
      {
        name: "Münchner Verkehrsgesellschaft (MVG)",
        area: "Munich, Germany",
        realTime: true,
      },
      {
        name: "Tranvías de La Coruña",
        area: "La Coruña, Spain",
        realTime: false,
      },
    ],
  },
]

export default function AgencyTable(): React.JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th>Agency</th>
          <th>Service Area</th>
          <th>Real-Time Data</th>
        </tr>
      </thead>
      <tbody>
        {agencies.map(({ region, agencies: regionAgencies }) => (
          <React.Fragment key={region}>
            <tr>
              <td
                colSpan={3}
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  background: "var(--ifm-color-emphasis-200)",
                  padding: "calc(var(--ifm-table-cell-padding) / 2)",
                }}
              >
                {region}
              </td>
            </tr>
            {regionAgencies.map((agency) => (
              <tr key={agency.name}>
                <td>{agency.name}</td>
                <td>{agency.area}</td>
                <td style={{ textAlign: "center" }}>
                  {agency.realTime ? "✅" : ""}
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}
