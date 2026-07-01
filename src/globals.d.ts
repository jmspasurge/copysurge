// CDN libraries loaded at runtime via injected <script> tags.
declare global {
  interface Window {
    mammoth: any;
    jspdf: any;
  }
}
export {};
