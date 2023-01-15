FROM python:latest
ENV ROOT_DIR=website_dir
ENV PORT_NO=8000
COPY . /$ROOT_DIR
EXPOSE $PORT_NO
WORKDIR /$ROOT_DIR
CMD python -m http.server $PORT_NO


