import ReactMarkdown from 'react-markdown';

export default function FinalNotes() {
  return (
    <ReactMarkdown>
      {`
### Pros of Server Components
- **Improved Performance:** Server Components reduce the amount of JavaScript sent to the client, leading to faster load times.
- **Direct Data Fetching:** They can fetch data directly from databases or files without needing an API layer.
- **Enhanced Security:** Sensitive data processing occurs on the server, minimizing exposure to the client.
- **Automatic Code Splitting:** Only the necessary components are sent to the client, optimizing resource usage.
- **SEO Benefits:** Server-rendered content is more accessible to search engines, improving SEO.

### Cons of Server Components
- **Lack of Interactivity:** They cannot handle **all** client-side interactivity directly and require Client Components for dynamic behavior, or creative use of built-in browser behavior (like our links).
- **Server Load:** Initial loading may be slower if complex server-side operations are performed. Though generally they are faster than on-device operations.

### Pros of Client Components
- **Rich Interactivity:** They can manage real-time interactions and updates without needing server calls.
- **Immediate User Feedback:** Changes can occur instantly in response to user actions.

### Cons of Client Components
- **Increased JavaScript Size:** They often require larger bundles, leading to slower initial load times.
- **Dependency on APIs:** Client Components rely on APIs for data, increasing complexity and potential latency.

### Why Server Components are Generally Better
- **Efficiency in Rendering:** They provide a more efficient way to render pages by leveraging server resources and reducing client overhead.
- **Easier State Management:** Since data fetching and state management occur on the server, it simplifies the logic compared to managing state in Client Components.
- **Efficiency in Coding**: They offload most API work between client and server, as everything is locked behind the server securely.
- **Consistent Environment:** They run in a consistent server environment, reducing issues related to differing client environments or configurations.
- **Better Caching Strategies:** Server Components can leverage server-side caching more effectively, leading to quicker responses for repeated requests.

### Final Notes
- In many places, the example code is not "dry" enough, but I left it un-optimized for better examples
- Converting from a client-only app to server-components is a lot of work
  - On the Clean Energy Connector project, it took approximately 2 months of work (while heavily refactoring everything)
  - We saw bundle savings of approx 70%, and speed increases of approx x3
- There's still lots of Next.js specific pain points to resolve, such as magic path strings, dead urls, proper css classes, etc.
- Style libraries are not covered, but many CSS-in-JS solutions, like styled-components or Emotion, do NOT work [well] in server components, and rely on client components.
  - There is a tectonic shift going on in the React ecosystem as they move to raw css or css modules to support server components.
- This is all a live running Next.js app. While Next.js is not _required_, it's the only full fledged framework supporting server components at this time, and for better or worse, all the React docs tell you to use it.
  - There is IMO no reason to use anything outside of Next.js for new React projects anymore.
- I live here: [https://github.nrel.gov/jfischer/react-components-lightning-talk](https://github.nrel.gov/jfischer/react-components-lightning-talk)

C'est La Vie - Jacob Fischer
`}
    </ReactMarkdown>
  );
}
