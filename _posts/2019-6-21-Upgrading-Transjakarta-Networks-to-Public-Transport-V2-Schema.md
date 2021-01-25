---
layout: post
title: "Upgrading Transjakarta Networks to Public Transport V2 Schema"
categories: [openstreetmap]
tags: [init-import, english]
---

I am currently working to improve Transjakarta, one of Jakarta's major BRT/Busway operators, to comply with [Public Transport Version 2 schema](https://wiki.openstreetmap.org/wiki/Public_transport) in OpenStreetMap, though Version 3 is [being purposed](https://wiki.openstreetmap.org/wiki/Proposed_features/Refined_Public_Transport).

![image](https://webcompat.com/uploads/2019/6/ec6b8b53-3b66-42b1-a4c6-c86233dbd82a.jpeg)
*Before and After map of Transjakarta Corridor 9 route, between Pluit and Penjaringan bus stops*

# Legacy Tags that I'd like to keep for compatibility:
+ `amenity=bus_stop` for PTV1 compatibility on bus stations
+ `corridorXX=yes`: assigns which Transjakarta corridors are served, such as `corridor9=yes` for Corridor 9 and `corridor12=yes` for Corridor 12 (see Implementation Notes if you are a developer utilising this tag for queries)
+ HOTOSM InAWARE tags
+ `network=Transjakarta`, now also reinforced with`network:wikidata` and `wikidata` values
+ `shelter=yes`
+ `shelter_tj=yes` (see Implementation Notes if you are a developer utilising this tag for queries)

# Things I REMOVED
+ `service=TransJakarta`, since this is unacceptable by Osmose and other QA tools (see Implementation Notes if you are a developer utilizing this tag for queries)

# New things that I added
+ `bus=yes` to meet PTV2 requirements for bus
+ Route relation-specific additions:
   - **New route relations will be added for Corridor sub-routes (e.g. Corridor 1A, 9M, etc.), night services (e.g. M1 for Corridor 1; though I'll consult with other OSM Public Transport implementations in other places)**
   - Duplicating roads since many Transjakarta networks operate on one-way roads
   - `network:wikidata=Q1671143` for Transjakarta, then add [Wikidata](https://www.wikidata.org) values for each route relation, e.g. `wikidata=Q12492249` for Corridor 5
   - `public_transport:version=2` to enable JOSM and Osmose debugging
+ Shelter/station-specific additions:
   - **Stations may now be represented as a Relation for those which have split platforms and/or multiple objects in OSM, such as in some Corridor 9 stations which are split by toll roads/expressways**
   - **Transit-Oriented Development (TOD) areas are now represented as a separate Relation to connect multiple stations serving different networks**
   - `covered=yes`, since Transjakarta stations are fully covered (in conjunction to `shelter=yes`)
   - `departures_board=realtime` since all Transjakarta stations (except Metrotrans, Miktrotrans, and Royaltrans services) have a live bus timetable, which can also be accessible through API at http://api.jakarta.go.id
   - `public_transport=stop_position` and `public_transport=platform`, see PTV2 on [OSM wiki](https://wiki.openstreetmap.org/wiki/Public_transport) for specific implementation
   - `smoking=no` due to government laws, though not necessarily applied to all stops and stations across Jakarta
   - `wheelchair=yes/dedicated/partial/no` (optional)

# Implementation Notes (for apps and services)
+ Please use the Route Relation instead of `corridorXX=yes` for network queries. After checking on taginfo.openstreetmap.org most of `corridorXX` tags are only used in Indonesia.
+ Additionally, you may include hard-coded Relation IDs which belong to Transjakarta network.
+ Please use `highway=*` and Transjakarta Route Relation IDs instead of `service=TransJakarta` to query roads which belongs to Transjakarta, as some parts of the routes do NOT have a separate road (or Kassel Kerbs)
+ Please use Transjakarta Route Relation objects with `role=platform` or `role=stop_position` instead of `shelter_tj`, as some Transjakarta (especially Royaltrans and Metrotrans) networks do stop at regular bus stations.
