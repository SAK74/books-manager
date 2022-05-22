export interface Book {
   "id": number,
   "type": "Text" | string,
   "title": string,
   "description": string,
   "downloads": number,
   "license": string,
   "subjects": string[],
   "bookshelves": string[],
   "languages": string[],
   "agents": {
      "id": number,
      "person": string,
      "type": "Author" | string
   }[],
   "resources": {
      "id": number,
      "uri": string,
      "type": "text/html; charset=utf-8" | "application/rdf+xml" | "image/jpeg" |
      "text/plain; charset=utf-8" | "application/x-mobipocket-ebook" | "application/epub+zip" |
      "application/x-mobipocket-ebook" | "application/zip" | "application/epub+zip"
   }[]
}
interface ActionFetch {
   type: "fetch",
   payload: Book[]
}
export type BookAction = ActionFetch;