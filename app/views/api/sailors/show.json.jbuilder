json.(@sailor, :name, :task_requirement, :image_url,
               :created_at, :updated_at)

json.voyages @sailor.voyages do |voyage|

  if(voyage.completed)
   json.id voyage.id
   json.rating voyage.rating
   json.comment voyage.comment
   json.created_at voyage.created_at
   json.task_type voyage.task_type

   json.user voyage.user, :id
   json.user voyage.user, :fname
   json.user voyage.user, :image_url
 end

end
