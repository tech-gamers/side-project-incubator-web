FROM node:10 As builder

WORKDIR /app
ENV NODE_ENV=production

ADD package.json .
ADD yarn.lock .
RUN yarn install

ADD . .

RUN yarn build

FROM nginx:alpine As host

# You can even configure more if you use a nginx.conf.sigil file
# (http://dokku.viewdocs.io/dokku/configuration/nginx/#customizing-the-nginx-configuration)
COPY nginx.default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .

EXPOSE 5000
