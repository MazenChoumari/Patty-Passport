import type { Playlist } from "@/data/countries";

export function MusicSection({ playlist }: { playlist: Playlist }) {
  const searchUrl = `https://open.spotify.com/search/${encodeURIComponent(playlist.name)}`;

  return (
    <section className="bg-sky-light py-16">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-sky-dark">
          Listen while you travel
        </p>
        <h2 className="mt-1 font-heading text-2xl font-semibold text-navy sm:text-3xl">
          {playlist.name}
        </h2>
        <ul className="mx-auto mt-6 max-w-md space-y-2 text-left">
          {playlist.tracks.map((t) => (
            <li
              key={t.title}
              className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-sm shadow-sm"
            >
              <span className="font-medium text-navy">{t.title}</span>
              <span className="text-navy-light">{t.artist}</span>
            </li>
          ))}
        </ul>
        <a
          href={searchUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-sm font-semibold text-sky-dark underline underline-offset-4 hover:text-passport-red"
        >
          Find this playlist on Spotify →
        </a>
      </div>
    </section>
  );
}
