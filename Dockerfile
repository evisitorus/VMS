# https://docs.docker.com/develop/develop-images/multistage-build/#stop-at-a-specific-build-stage
# https://docs.docker.com/compose/compose-file/#target


# https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact
ARG NODE_VERSION=16

# "common" stage
FROM node:${NODE_VERSION}-alpine AS api_platform_pwa_common

EXPOSE 4200

WORKDIR /usr/src/angular

# ENV NEXT_TELEMETRY_DISABLED 1

# prevent the reinstallation of node modules at every changes in the source code
COPY package.json ./
RUN npm install

COPY . ./

VOLUME /usr/src/angular/node_modules


# "development" stage
# depends on the "common" stage above
FROM api_platform_pwa_common AS angular_dev

ENV API_PLATFORM_CLIENT_GENERATOR_OUTPUT .
RUN yarn global add @api-platform/client-generator

CMD ["yarn", "dev"]


# "build" stage
# depends on the "common" stage above
FROM api_platform_pwa_common AS angular_prod

# ENV NODE_ENV production
# ARG NEXT_PUBLIC_ENTRYPOINT

RUN set -eux; \
	npm run build

CMD ["npm", "run", "start"]
