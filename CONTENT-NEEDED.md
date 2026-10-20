# Her Quest website: content needed

The site now has a place ready for each of the items below. Until the real
content arrives, each place shows a dashed box marked **"Awaiting content from
Her Quest"** that describes what goes there. Send items to the web team. Each
box is swapped for the real thing as soon as it arrives.

> Don't merge this branch into the live site while placeholders remain. Use the
> Vercel preview link to review it.

Order follows the page from top to bottom.

| # | Section on the site | What we need | Format / length | Status |
|---|---|---|---|---|
| 1 | **Our Story** (under About) | Short history of Her Quest: how and when it started, what inspired it, first cohort, growth since. Optional: 3–5 milestones with years for the timeline. | 150–250 words | ☐ |
| 2 | **Watch: Hear it from Naomi** | Video of Naomi summarising the programme | Landscape 16:9, **max 3 min**. YouTube/Vimeo link or MP4, plus one still image | ☐ |
| 3 | **The Journey: Moments from Her Checkpoint** | Photos from the in-person Her Checkpoint meetups | 3–6 landscape photos, ≥1600px wide | ☐ |
| 4 | **The Journey: feedback link** | Link to a feedback form for people who attended a programme (Google Form or similar) | URL | ☐ |
| 5 | **Meet the Founder: Naomi's bio** | Confirm the draft line (interior designer, mentor, conference speaker, marriage counsellor) **and** list her marketplace / corporate experience: organisations, roles, boards, conferences | Short list, logos optional | ☐ |
| 6 | **Quote band** | Scriptures or quotes to feature, with their source | 2–3 quotes, under 30 words each | ☐ |
| 7 | **Community Voices** | Done: real testimonials from Mercy Kagu, Terry Njerenga and Njeri Matiru. Still welcome: Njeri's cohort year and more dominion testimonials | Name, cohort, written permission | ☑ |
| 8 | **In Their Own Words: video testimonials** | 3 short testimonial videos (like the one Maryann and two others recorded) | Vertical 9:16, 30–60 sec each. Instagram Reel link or MP4 | ☐ |
| 9 | **In Their Own Words: session clip** | A clip from a past session, ideally one not posted anywhere before | Vertical or landscape, under 2 min | ☐ |
| 10 | **Life After Her Quest: Women walking in dominion** | 2+ stories showing how the journey still works in past attendees' lives (practical, not just testimony) | 80–120 words each + photo, name, cohort | ☐ |
| 11 | **Gallery additions** | Photos from earlier cohorts, a team photo, Her Coronation photos | Landscape where possible. Team names & roles optional | ☐ |
| 12 | **Her Quest Calendar (Events)** | Upcoming events: e.g. Go Conference, She Blooms, next cohort intake | Per event: title, date & time, venue/link, poster (4:5), registration link | ☐ |
| 13 | **Event pop-up** | Which event (if any) should pop up when someone opens the site | Same details as #12. Can be switched on and off | ☐ |
| 14 | **Join Her Circle** | 2–3 sentence description of Her Circle, who it is for, the link/platform to join, and which details to collect (name, email, phone, city, cohort… confirm) | Text + URL | ☐ |
| 15 | **FAQ** | Answers to the 7 draft questions (who can join, not only for ministers, schedule, Checkpoint & Coronation, fee, next intake, where to get help). Add or remove questions | 1–3 sentences per answer | ☐ |

## Already done (no content needed)

- Menu links fixed (The Journey, Courses). Mobile menu no longer gets stuck
- Her Checkpoint / Her Coronation naming
- One title in The Journey section, plus a line explaining the 3 pillars
- Bigger logo, bolder text, more legible "A Christian Women's Ministry"
- "1" no longer looks like "I"
- Home page line reworded so it doesn't read as being for preachers only
- Contact Us → info@herquest.co.ke (menu + footer). Social links in the footer

## For the web team

- Placeholders use the `.awaiting` class (search `awaiting` in `index.html`).
  Delete the block and drop the real content in its place.
- The event pop-up is switched off in `main.js` (`HQ_ANNOUNCEMENT.enabled`).
  To preview it, add `?preview=announce` to the URL.
- The Her Circle form is disabled and sends nothing until a real destination is
  chosen.
