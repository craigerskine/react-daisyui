export default function Home() {
  return (
    <main className="py-12 md:py-24 px-4 min-h-screen flex flex-col items-center justify-between">
      <h1 className="pb-12 md:pb-24 text-xl font-bold flex flex-col flex-none items-center md:text-3xl">React + Tailwind + DaisyUI + CDL <small className="text-sm font-semibold uppercase opacity-70">experiments</small></h1>
      <section className="mx-auto w-full max-w-xl space-y-6 flex-1">
        <article className="grid grid-cols-3 items-center gap-6">
          <div>
            <button className="btn btn-secondary btn-sm">Secondary sm</button>
          </div>
          <div>
            <button className="btn btn-primary">Primary</button>
          </div>
          <div>
            <button className="btn btn-accent btn-lg">Accent lg</button>
          </div>
          <div className="col-span-3">
            <button className="btn btn-block">Block button</button>
          </div>
        </article>
        <article className="flex flex-wrap items-center gap-6">
          <button className="btn btn-wide">Wide button</button>
          <button className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2Z"/></svg>
            With icon
          </button>
          <button className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2Z"/></svg>
          </button>
        </article>
        <article className="flex flex-wrap items-center justify-center gap-6">
          <button className="btn btn-secondary btn-outline btn-circle btn-xs">&times;</button>
          <button className="btn btn-error btn-outline btn-square btn-xs">&times;</button>
          <button className="btn btn-secondary btn-outline btn-circle btn-sm">&times;</button>
          <button className="btn btn-error btn-outline btn-square btn-sm">&times;</button>
          <button className="btn btn-secondary btn-outline btn-circle">&times;</button>
          <button className="btn btn-error btn-outline btn-square">&times;</button>
          <button className="btn btn-secondary btn-outline btn-circle btn-lg">&times;</button>
          <button className="btn btn-error btn-outline btn-square btn-lg">&times;</button>
        </article>
        <article className="join w-full">
          <button className="join-item btn btn-outline">Btn pre</button>
          <input type="text" className="join-item input input-bordered flex-1" placeholder="Joined input" />
          <button className="join-item btn btn-neutral">Btn post</button>
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
        <article className="flex items-center gap-6">
          <select className="select select-sm select-bordered">
            <option selected disabled>Choose</option>
            <option value="Some value">Some value</option>
          </select>
          <select className="select select-bordered">
            <option selected disabled>Choose</option>
            <option value="Some value">Some value</option>
          </select>
          <select className="select select-lg select-bordered">
            <option selected disabled>Choose</option>
            <option value="Some value">Some value</option>
          </select>
        </article>
        <article className="grid grid-cols-1 gap-6">
          <input type="file" className="file-input file-input-sm file-input-accent" />
          <input type="file" className="file-input file-input-bordered" />
          <input type="file" className="file-input file-input-lg file-input-secondary" />
        </article>
      </section>
    </main>
  )
}
