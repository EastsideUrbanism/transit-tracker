# Which transit agencies are supported?

Transit Tracker can support pretty much any transit agency with a GTFS feed, but it must be added to the API server you are using first. (This is the service which takes information from a transit agency and formats it for your Transit Tracker to display.)

Eastside Urbanism hosts a community API server for those who do not want to set up their own. However, since it is volunteer-run there is no guarantee of uptime, timely updates, etc. The hosting is paid for out-of-pocket by volunteers, so we must limit the number of agencies we support to keep costs manageable.

Due to this, we strongly recommend [hosting your own API server](../../03-advanced/api-server.md) if you are able to.

## Supported Agencies

Our Transit Tracker API server currently syndicates data from the following agencies.

| Agency                                                 | Service Area                              | Real-Time Data |
| ------------------------------------------------------ | ----------------------------------------- | -------------- |
| Amtrak                                                 | USA                                       | ✅             |
| North County Transit District                          | California, USA                           | ✅             |
| San Diego Metropolitan Transit System (MTS)            | San Diego, California, USA                | ✅             |
| Regional Transportation District (RTD)                 | Denver, Colorado, USA                     | ✅             |
| Chicago Transit Authority (CTA)                        | Chicago, Illinois, USA                    |                |
| Metra                                                  | Chicago, Illinois, USA                    | ✅             |
| Massachusetts Bay Transportation Authority (MBTA)      | Massachusetts, USA                        | ✅             |
| NJ Transit                                             | New Jersey, USA                           |                |
| MTA Buses                                              | New York, USA                             | ✅             |
| NYC Subway                                             | New York, USA                             | ✅             |
| TriMet                                                 | Oregon, USA                               | ✅             |
| Portland Streetcar                                     | Portland, Oregon, USA                     | ✅             |
| Dallas Area Rapid Transit (DART)                       | Dallas, Texas, USA                        |                |
| Houston METRO                                          | Houston, Texas, USA                       | ✅             |
| DASH                                                   | Alexandria, Virginia, USA                 | ✅             |
| Washington Metropolitan Area Transit Authority (WMATA) | Washington, D.C., USA                     | ✅             |
| King County Metro                                      | King County, Washington, USA              | ✅             |
| Sound Transit                                          | Washington, USA                           | ✅             |
| Pierce Transit                                         | Pierce County, Washington, USA            | ✅             |
| Community Transit                                      | Snohomish County, Washington, USA         | ✅             |
| Intercity Transit                                      | Thurston County, Washington, USA          | ✅             |
| Washington State Ferries                               | Washington, USA                           | ✅             |
| Seattle Center Monorail                                | Seattle, Washington, USA                  | ✅             |
| Everett Transit                                        | Everett, Washington, USA                  | ✅             |
| Kitsap Transit                                         | Kitsap County, Washington, USA            | ✅             |
| Link Transit                                           | Wenatchee, Washington, USA                | ✅             |
| Whatcom Transportation Authority                       | Whatcom County, Washington, USA           | ✅             |
| C-TRAN                                                 | Clark County, Washington, USA             |                |
| City of Madison Metro                                  | Madison, Wisconsin, USA                   | ✅             |
| Milwaukee County Transit System (MCTS)                 | Milwaukee, Wisconsin, USA                 | ✅             |
| Edmondton Transit System (ETS)                         | Edmonton, Alberta, Canada                 | ✅             |
| TransLink                                              | Metro Vancouver, British Columbia, Canada | ✅             |
| Winnipeg Transit                                       | Winnipeg, Manitoba, Canada                |                |
| Société de transport de Montréal (STM)                 | Montréal, Québec, Canada                  | ✅             |
| Réseau de transport de la Capitale (RTC)               | Québec City, Québec, Canada               | ✅             |
| OC Transpo                                             | Ottawa, Ontario, Canada                   | ✅             |
| Toronto Transit Commission (TTC)                       | Toronto, Ontario, Canada                  | ✅             |
| Ilévia                                                 | Lille, France                             | ✅             |
| Verkehrsverbund Berlin-Brandenburg (VBB)               | Berlin-Brandenburg, Germany               |                |
| Tranvías de La Coruña                                  | La Coruña, Spain                          |                |

### Why is there no real-time data for some agencies?

Some transit agencies do not provide real-time data in a format supported by the Transit Tracker API, e.g. through a non-standard API or not at all. In these cases, only scheduled arrival times will be available.

## Agency not listed?

If you would like us to add your local transit agency to our hosted API server, please check the [GitHub issues](https://github.com/EastsideUrbanism/transit-tracker/issues) to see if someone has requested it previously, and [open an issue](https://github.com/EastsideUrbanism/transit-tracker/issues/new?template=new_agency.yaml) if not. Please keep in mind that opening an issue does not guarantee that we will add your agency; it is simply registering interest. It is infeasible for us to support every request due to hosting costs and volunteer time constraints, but we will do our best to accommodate as many as we can.

Since the Transit Tracker API server is open-source, anyone can host their own server and add support for any transit agency they'd like. More information on self-hosting is available in the [API Server](../../03-advanced/api-server.md) documentation.
