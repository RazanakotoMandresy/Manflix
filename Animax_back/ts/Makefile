clean:
	@docker container stop  mongo_animax && docker container rm  mongo_animax
run: 
	-docker container stop  mongo_animax && docker container rm  mongo_animax
	@docker run -d -p  27017:27017 --name mongo_animax mongo && bun start
