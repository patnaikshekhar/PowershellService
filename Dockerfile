FROM microsoft/nanoserver
ADD https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-win-x64.zip C:\\build\\node-v${NODE_VERSION}-win-x64.zip

RUN powershell -Command Expand-Archive C:\build\node-v${NODE_VERSION}-win-x64.zip C:\; Rename-Item C:\node-v${NODE_VERSION}-win-x64 node
RUN SETX PATH C:\node

WORKDIR c://app
COPY *.json c://app/
RUN npm install
COPY *.js c://app/
COPY ./SCRIPTS c:
EXPOSE 80
CMD ["node", "main.js"]