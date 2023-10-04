export default function Home() {
  return (
    <main className="py-24 px-4 min-h-screen flex flex-col items-center justify-between">
      <section className="mx-auto w-full max-w-xl space-y-6">
        <article className="flex items-center gap-6">
          <button className="btn btn-primary btn-xs">Button</button>
          <button className="btn btn-primary btn-sm">Button</button>
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-primary btn-xs md:btn-lg">Button</button>
        </article>
        <article className="join w-full">
          <button className="join-item btn btn-neutral btn-outline">Pre join</button>
          <input type="text" className="join-item input input-ghost input-bordered flex-1" placeholder="Joined input" />
          <button className="join-item btn">Post join</button>
        </article>
        <article className="flex gap-6">
          <button className="btn btn-secondary btn-outline btn-circle btn-xs">&times;</button>
          <button className="btn btn-error btn-outline btn-square btn-xs">&times;</button>
          <button className="btn btn-secondary btn-outline btn-circle btn-sm">&times;</button>
          <button className="btn btn-error btn-outline btn-square btn-sm">&times;</button>
          <button className="btn btn-secondary btn-outline btn-circle">&times;</button>
          <button className="btn btn-error btn-outline btn-square">&times;</button>
          <button className="btn btn-secondary btn-outline btn-circle btn-lg">&times;</button>
          <button className="btn btn-error btn-outline btn-square btn-lg">&times;</button>
        </article>
        <article className="flex items-center gap-6">
          <button className="btn btn-wide">Wide button</button>
          <button className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2Z"/></svg>
            With icon
          </button>
        </article>
        <article className="grid grid-cols-1 gap-6">
          <div className="form-control">
            <label htmlFor="formInput" className="label">
              <span className="label-text">Main label</span>
              <span className="label-text-alt">Top Right label</span>
            </label>
            <input type="text" id="formInput" className="input input-bordered w-full" placeholder="A form control" />
            <label htmlFor="formInput" className="label">
              <span className="label-text-alt">Bottom Left label</span>
              <span className="label-text-alt">Bottom Right label</span>
            </label>
          </div>
        </article>
      </section>
    </main>
  )
}
