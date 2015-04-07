Phase 2: Booking Crew Members (~2 days)

## Rails
### Models
* crew_member
* crew_assignment
* voyage

### Controllers
Api::CrewMemberController (index, show, update)
Api::CrewAssignments (index, create, delete)
Api::Voyage (create, update)

### Views
* crew_member/show.json.jbuilder

## Backbone
### Models
* CrewMember
* Voyage
* CrewAssignment

### Collections
* CrewMembers
* CrewAssignments

### Views
* CrewMemberItem
* CrewMemberIndex (composite view, contains crew member item)

* CurrentCrew

## Gems/Libraries
* Google Maps JavaScript API v3
