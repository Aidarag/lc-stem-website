---
id: "4"
slug: purpleair-sensor-spoofing-detection
title: Sensor Spoofing Detection for PurpleAir Air Quality Networks
tagline: First place, MS-CC Hackathon at West Virginia State University
category: Hackathon
date: April 2026
---

PurpleAir operates a distributed network of low cost air quality sensors that
communities, researchers, and city agencies rely on for real time readings.
Because the network is open and inexpensive to join, it is also vulnerable to
spoofing. A compromised or manipulated sensor can report readings that look
completely legitimate, and there is no obvious way to tell a false reading from
a true one just by looking at it.

We built a detection layer for that problem. Our model assigns every sensor a
trust score and a stress score, calculated through statistical deviation
analysis that compares each sensor against the behavior of its neighbors and its
own historical baseline. When a sensor begins reporting values that deviate
beyond an expected threshold, its trust score falls and the network flags it
before the bad data propagates into downstream reporting.

The project was built in Python during the MS-CC Hackathon at West Virginia
State University, hosted by the Minority Serving Cyberinfrastructure Consortium,
where our Livingstone College team placed first in the cyber physical systems
security track.

## Key details

- **Category:** Cyber physical systems security
- **Tools:** Python, statistical deviation analysis
- **Event:** MS-CC Hackathon, West Virginia State University
- **Date:** April 2026
- **Result:** First place
- **Team:** Cephas Osei Bonsu, Prosper Nasangma, Amos Abdulai, Michael Atayi (Livingstone College)
