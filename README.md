# TaskPirates

[Heroku link][heroku]

[heroku]: http://flux-capacitr.herokuapp.com

## Minimum Viable Product
TaskPirates is a clone of TaskRabbit built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Book a crew member
- [x] See which crew members they have booked
- [x] User can fill out a form to describe the task type
- [x] Recommend crew members based on skills match
- [ ] See the profile of each crew member
- [ ] Rate crew members post-voyage

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (~0.5 days)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create blogs using
a simple text form in a Rails view. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Booking Crew Members (~2 days)
I will add API routes to serve crew member data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to see all potential crew members, book new crew members, see their current crew, and remove crew members all inside a single Backbone app.


[Details][phase-two]

### Phase 3: Users Can Use a Form to Describe the Work Required (~2 days)
Users will be guided through a simple form to describe the work need on the voyage (swabbing the decks, manning the helm, loading the cannons).  We will then recommend crew members for that task based on a skill-match.  I will add skill attributes to each potential crew member and build an equation to assign a “match-score” to each crew member based on the answers to the users questions.  The form will be implemented using backbone and html.

[Details][phase-three]

### Phase 4: Viewing Crew Member Profiles (~1 day)
I’ll add a feature so that user’s can click on any crew member’s picture and be taken to their full profile.  The profile will include name and skills.

[Details][phase-four]

### Phase 5: Rate the Crew Members Post Voyage (~2 days)
Following the “conclusion” of the voyage, users will be guided through a simple form to give a rating to each of their crew members.  They will also be able to close the rating form at any time.  This form will be implemented using html and backbone.  It will also update the database.

### Phase 6: Polishing the User Interface (~1.5 days)
I will use bootstrap and existing CSS templates to make the user interface beautiful and responsive.  I will also need to spend time creating seed data for crew members, reviews, etc.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Crew members respond immediately when they have been requested to join a crew
- [ ] History of old voyages
- [ ] Start multiple voyages
- [ ] Multiple sessions/session management

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

