<div align="center">
 <img src="https://i.imgur.com/R1oaS9R.png" />

# Matay / מתי

### Matay helps you find the most fitting date and time for your next event.

Matay is a "reversed-engineered" version of the Dutch website datumprikker.

### [Live demo](https://youtu.be/f0Ee8tCxW24)

</div>

## Features

**Easy event scheduling:**

Everyone can create an event, what does that mean? Let's say you're in a class of 15 people, and you want to organize a meeting. You have a few dates in mind and want to make sure with the whole group that they will be available on those dates, staying on track with everyone's response/lack of response can lead to some headaches.
With Matay (translates to “when” in Hebrew) you can easily create an event, and send out the link to whoever.

- Easy way to create an event, no user account needed.
- Intuitively see user responses, with their availability status – which can be either ✅ available, ❌ unavailable or 🟧 might be available.
- Progress bar for each date suggested, calculated with the user responses.
- Ability to show the event IDs you've created, this was achieved using local storage.
- Using “zod” for form schema validations.

## Usage

### For development, use this:

```docker
$ docker compose up --build --force-recreate
```

### For production, use this:

```docker
$ docker compose -f docker-compose.production.yml up -d
```

The database port (using `27018`) is purposely not exposed (in `docker-compose.yml`)

## Might to-do list

- [ ] Show the event type on the event page.
- [ ] Add ability to post comments on the event page.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
