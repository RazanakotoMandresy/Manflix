FROM oven/bun:alpine
# this is a comment-line
WORKDIR /animax 
COPY package.json src /animax/
RUN bun install
CMD [ "bun","start" ]