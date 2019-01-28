FROM stefanscherer/node-windows:10-windowsservercore
WORKDIR c://app
COPY *.json c://app/
RUN npm install
COPY *.js c://app/
COPY ./SCRIPTS c://SCRIPTS/
EXPOSE 80
CMD ["node", "main.js"]