FROM stefanscherer/node-windows:10-nanoserver
COPY *.json c://app/
RUN npm install
COPY *.js c://app/
COPY ./SCRIPTS c:
WORKDIR c://app
EXPOSE 80
CMD ["node", "main.js"]