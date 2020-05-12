FROM cypress/base:10
ADD ./ /web
WORKDIR /web
RUN mkdir -p ~/cypress
COPY cypress ./cypress
COPY package.json .
COPY cypress.json .
RUN CI=true
RUN npx cypress verify
CMD ["npm", "run", "cypress-cli"]
