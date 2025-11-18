# Which transit agencies are supported?

Transit Tracker can support pretty much any transit agency with a GTFS feed, but it must be added to the API server you are using first. (This is the service which takes information from a transit agency and formats it for your Transit Tracker to display.)

Eastside Urbanism hosts a community API server for those who do not want to set up their own. However, since it is volunteer-run there is no guarantee of uptime, timely updates, etc. The hosting is paid for out-of-pocket by volunteers, so we must limit the number of agencies we support to keep costs manageable.

Due to this, we strongly recommend [hosting your own API server](../../03-advanced/api-server.md) if you are able to.

Our Transit Tracker API server currently syndicates data from the following agencies.

## Supported Agencies

| Agency                                                 | Service Area                               | Real-Time Data |
| ------------------------------------------------------ | ------------------------------------------ | -------------- |
| Amtrak                                                 | USA                                        | ✅             |
| North County Transit District                          | California, USA                            | ✅             |
| San Diego Metropolitan Transit System (MTS)            | California, USA                            | ✅             |
| Regional Transportation District (RTD)                 | Colorado, USA (Denver)                     | ✅             |
| NJ Transit                                             | New Jersey, USA                            |               |
| MTA Buses                                              | New York, USA                              | ✅             |
| NYC Subway                                             | New York, USA                              |                |
| TriMet                                                 | Oregon, USA                                | ✅             |
| Portland Streetcar                                     | Oregon, USA                                | ✅             |
| Dallas Area Rapid Transit (DART)                       | Texas, USA                                 |                |
| DASH                                                   | Virginia, USA (Alexandria)                 |                |
| Washington Metropolitan Area Transit Authority (WMATA) | Washington, D.C., USA                      | ✅             |
| King County Metro                                      | Washington State, USA                      | ✅             |
| Sound Transit                                          | Washington State, USA                      | ✅             |
| Pierce Transit                                         | Washington State, USA                      | ✅             |
| Community Transit                                      | Washington State, USA                      | ✅             |
| Intercity Transit                                      | Washington State, USA                      | ✅             |
| Washington State Ferries                               | Washington State, USA                      | ✅             |
| Seattle Center Monorail                                | Washington State, USA                      | ✅             |
| Everett Transit                                        | Washington State, USA                      | ✅             |
| Kitsap Transit                                         | Washington State, USA                      | ✅             |
| Whatcom Transportation Authority                       | Washington State, USA                      | ✅             |
| C-TRAN                                                 | Washington State, USA (Clark County)       |                |
| TransLink                                              | British Columbia, Canada (Metro Vancouver) | ✅             |
| Winnipeg Transit                                       | Manitoba, Canada                           |                |
| Toronto Transit Commission (TTC)                       | Ontario, Canada                            | ✅             |
| Verkehrsverbund Berlin-Brandenburg (VBB)               | Germany                                    |                |

## Agency not listed?

We can easily add support for new transit agencies. Please check the [GitHub issues](https://github.com/EastsideUrbanism/transit-tracker/issues) to see if someone has requested it previously, and [open an issue](https://github.com/EastsideUrbanism/transit-tracker/issues/new?template=new_agency.yaml) if not.

Since the Transit Tracker API server is open-source, anyone can host their own server and add support for any transit agency they'd like. More information on self-hosting is available in the [API Server](../../03-advanced/api-server.md) documentation.
