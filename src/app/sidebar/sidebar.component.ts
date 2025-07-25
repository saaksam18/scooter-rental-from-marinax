import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  // Property to hold the currently active language
  currentLang: string;

  constructor(private translate: TranslateService) {
    // Set a fallback default language
    translate.setDefaultLang("en");

    // 1. Check for stored language preference in localStorage
    const storedLang = localStorage.getItem("userLanguagePreference");

    if (storedLang) {
      // If a language preference is stored, use it
      this.translate.use(storedLang);
    } else {
      // 2. If no preference is stored, detect browser language
      const browserLang = translate.getBrowserLang();
      if (browserLang) {
        // Use the browser language if it's available and supported by your translations
        // You might want to check if this language exists in your available translations
        this.translate.use(browserLang.match(/en|jp/) ? browserLang : "en");
      } else {
        // 3. If neither is available, use the predefined default
        this.translate.use("en");
      }
    }

    // Initialize currentLang after the language has been set by the constructor logic
    this.currentLang = this.translate.currentLang;

    // Subscribe to language changes to keep currentLang updated
    this.translate.onLangChange.subscribe((event: any) => {
      this.currentLang = event.lang;
    });
  }

  /**
   * Changes the active language for the application and stores the preference.
   * @param language The language code (e.g., 'en', 'jp').
   */
  useLanguage(language: string) {
    this.translate.use(language);
    // The onLangChange subscription will update this.currentLang automatically
    // Store the user's language preference in localStorage
    localStorage.setItem("userLanguagePreference", language);
  }

  ngOnInit() {
    // Initialization logic can go here if needed
  }
}
