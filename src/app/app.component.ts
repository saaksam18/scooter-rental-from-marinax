// app.component.ts:
import {
  Component,
  ElementRef,
  OnInit,
  HostListener,
  OnDestroy,
} from "@angular/core"; // Added OnDestroy
import smoothscroll from "smoothscroll-polyfill";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs/Subscription";

import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  // Implemented OnDestroy
  isLoading = true;
  isShow: boolean;
  topPosToStartShowing = 100;

  skipAnimation: boolean = false;

  onLangChange: Subscription = undefined;
  private routerSubscription: Subscription;
  private readonly SESSION_LOADED_KEY = "app_initial_load_done";

  constructor(
    private _loadingBar: SlimLoadingBarService,
    private _router: Router,
    public el: ElementRef,
    private translate: TranslateService
  ) {
    this.routerSubscription = this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        this._loadingBar.complete();
      }, 200);
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
  @HostListener("window:scroll")
  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
      smoothscroll.polyfill();
    } else {
      this.isShow = false;
    }
  }
  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  ngOnInit() {
    const hasLoadedBefore = sessionStorage.getItem(this.SESSION_LOADED_KEY);

    if (hasLoadedBefore) {
      // Path for refresh/session load
      this.skipAnimation = true;
      this.isLoading = false;
    } else {
      // Initial load path
      setTimeout(() => {
        this.isLoading = false;
        sessionStorage.setItem(this.SESSION_LOADED_KEY, "true");
      }, 4500);
    }

    // dynamic html lang
    this.onLangChange = this.translate.onLangChange.subscribe(() => {
      this.updateLanguage();
    });
  }

  // Use ngOnDestroy to unsubscribe and prevent memory leaks
  ngOnDestroy(): void {
    if (this.onLangChange) {
      this.onLangChange.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  /**
   * Update the language in the lang attribute of the html element.
   */
  updateLanguage(): void {
    const lang = document.createAttribute("lang");
    lang.value = this.translate.currentLang;
    this.el.nativeElement.parentElement.parentElement.attributes.setNamedItem(
      lang
    );
  }
}
