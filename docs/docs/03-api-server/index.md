# API Server

The Transit Tracker API server is the service that powers delivery of schedule data to the Transit Tracker device. It connects to the data sources provided by transit agencies (e.g., GTFS or OneBusAway) and publishes schedule data in a more lightweight format. While intended to be used with Transit Tracker, you can also use it for anything that requires real-time schedule data for specific routes and stops.

Eastside Urbanism hosts the API server used throughout this guide, but anyone is welcome to host their own for personal use or to add support for additional transit agencies. More information on deployment can be found on the [GitHub repository](https://github.com/tjhorner/transit-tracker-api).
