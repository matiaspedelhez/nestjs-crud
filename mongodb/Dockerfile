FROM mongo:latest
EXPOSE 27017

RUN if [ -d "/docker-entrypoint-initdb.d/" ]; then rm -rf /docker-entrypoint-initdb.d/; fi

COPY ./mongodb-setup.js /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/mongodb-setup.js