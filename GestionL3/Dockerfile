# Use the official Python base image
FROM python:latest

RUN apt-get update \
    && apt-get -y upgrade \
    && apt-get install -y --no-install-recommends \
    apt-utils \
    postgresql-client

# Set the working directory in the container
WORKDIR /GestionL3

# Copy the requirements.txt file and install dependencies
COPY requirements.txt ./
RUN pip install -r requirements.txt --use-pep517

# Copy the rest of the project code to the container
COPY . .

# Expose the port that the Django app will run on
EXPOSE 8000

# Start the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
