# Используем базовый образ Python
FROM python:3.10-alpine

ENV PYTHONUNBUFFERED 1

WORKDIR /server

COPY requirements.txt .

RUN python -m pip install --upgrade pip

RUN pip install -r requirements.txt --no-cache-dir

COPY . .

ENV POSTGRES_HOST=${POSTGRES_HOST}
ENV POSTGRES_PORT=${POSTGRES_PORT}
ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ENV POSTGRES_DB=${POSTGRES_DB}
ENV DJANGO_SECRET_KEY=${DJANGO_SECRET_KEY}
ENV DJANGO_SUPERUSER_EMAIL=${DJANGO_SUPERUSER_EMAIL}
ENV DJANGO_SUPERUSER_PASSWORD=${DJANGO_SUPERUSER_PASSWORD}
ENV DJANGO_SUPERUSER_USERNAME=${DJANGO_SUPERUSER_USERNAME}
ENV DJANGO_DEBUG=${DJANGO_DEBUG}


# RUN python manage.py makemigrations
# RUN python manage.py migrate 
# RUN python manage.py initadmin
# RUN python manage.py collectstatic --noinput

# Устанавливаем Unicorn
RUN pip install gunicorn

EXPOSE 8000

CMD ["gunicorn", "--workers", "4", "--timeout", "1000", "server.wsgi:application", "--bind", "0.0.0.0:8000"]