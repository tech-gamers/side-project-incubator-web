FROM node:10 As builder

WORKDIR /app

ADD package.json .
ADD yarn.lock .
RUN yarn install

ADD public/ src/ tsconfig.json ./

RUN yarn build

FROM nginx:alpine As host

# You can even configure more if you use a nginx.conf.sigil file
# (http://dokku.viewdocs.io/dokku/configuration/nginx/#customizing-the-nginx-configuration)
COPY nginx.default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .

EXPOSE 5000
