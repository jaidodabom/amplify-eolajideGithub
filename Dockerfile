FROM node:12
RUN mkdir -p /code
WORKDIR /code

RUN apt-get update && apt-get install -y python-dev screen

RUN cd /tmp/ && git clone https://github.com/facebook/watchman.git && \
cd watchman && git checkout v4.9.0 && ./autogen.sh && \
./configure && make -j4 && make install  && cd / && rm -rf /tmp/watchman

# RUN npm set progress=false && \
RUN npm install -g create-react-native-app expo-cli @aws-amplify/cli

# CHANGE the UID accordingly, follow the step at the note section.
RUN useradd -m -u 501 -s /bin/bash ec2-user