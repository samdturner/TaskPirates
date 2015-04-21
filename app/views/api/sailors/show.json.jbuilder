json.(@sailor, :name, :swabbingDecks, :loadingCannons, :manningHelm,
               :task_requirement, :created_at, :updated_at)

  # json.comments @sailor.voyages, :id, :name

json.voyages @sailor.voyages do |voyage|

  if(!voyage.completed)
   json.id voyage.id
   json.name voyage.name
   json.rating voyage.rating
   json.comment voyage.comment
   json.created_at voyage.created_at
   json.task_type voyage.task_type
 end

 json.user voyage.user, :id

end
