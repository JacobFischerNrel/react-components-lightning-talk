export default function FinalNotes() {
  return (
    <ul>
      {`
In many places, the example code is not "dry" enough, but I left it un-optimized for better examples
There's still lots of Next.js specific pain points to resolve, such as magic path strings, dead urls, proper css classes, etc.
Style libraries are not covered, but many CSS-in-JS solutions, like styled-components or Emotion, do NOT work [well] in server components, and rely on client components.
There is a tectonic shift going on in the React ecosystem as they move to raw css or css modules to support server components.
This is all a live running Next.js app. While Next.js is not required, it's the only full fledged framework supporting server components at this time, and for better or worse, all the React docs tell you to use it. There is IMO no reason to use anything outside of Next.js for React projects anymore.
I live here: https://github.nrel.gov/jfischer/react-components-lightning-talk
`
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((line) => (
          <li key={line}>{line}</li>
        ))}
    </ul>
  );
}
