FROM alpine

# https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-in-docker
# Installs latest Chromium (85) package.
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    nodejs \
    npm

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Prepare working directory
RUN mkdir -p dccscanner
WORKDIR /dccscanner

# Copy api and client package.json files
COPY package*.json /dccscanner/

# Install api and next js dependencies
RUN npm install --omit=dev

# Copy all files and .next, api and public folders
COPY . /dccscanner

EXPOSE 3000

ENTRYPOINT ["node", "--optimize_for_size", "--max_old_space_size=460", "app.js"]