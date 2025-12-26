/**
 * BREATHE WELLNESS SANCTUARY
 * Main JavaScript - Social Wellness Club Interactions
 */

(function() {
  'use strict';

  // ==========================================================================
  // WARM GLOW CURSOR EFFECT
  // ==========================================================================
  class WarmGlowCursor {
    constructor() {
      this.cursor = document.querySelector('.warm-glow-cursor');
      if (!this.cursor) return;
      
      this.mouseX = 0;
      this.mouseY = 0;
      this.cursorX = 0;
      this.cursorY = 0;
      this.speed = 0.1;
      
      this.init();
    }
    
    init() {
      document.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
      });
      
      this.animate();
    }
    
    animate() {
      this.cursorX += (this.mouseX - this.cursorX) * this.speed;
      this.cursorY += (this.mouseY - this.cursorY) * this.speed;
      
      this.cursor.style.left = `${this.cursorX}px`;
      this.cursor.style.top = `${this.cursorY}px`;
      
      requestAnimationFrame(() => this.animate());
    }
  }

  // ==========================================================================
  // HEADER SCROLL EFFECT
  // ==========================================================================
  class HeaderScroll {
    constructor() {
      this.header = document.querySelector('.site-header');
      if (!this.header) return;
      
      this.scrollThreshold = 100;
      this.init();
    }
    
    init() {
      window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
      this.handleScroll();
    }
    
    handleScroll() {
      if (window.scrollY > this.scrollThreshold) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    }
  }

  // ==========================================================================
  // INTERSECTION OBSERVER ANIMATIONS
  // ==========================================================================
  class ScrollAnimations {
    constructor() {
      this.animatedElements = document.querySelectorAll('[data-animate]');
      if (!this.animatedElements.length) return;
      
      this.init();
    }
    
    init() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const animation = el.dataset.animate || 'fade-in-up';
              const delay = el.dataset.delay || 0;
              
              setTimeout(() => {
                el.classList.add(`animate-${animation}`, 'animated');
              }, delay * 100);
              
              observer.unobserve(el);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );
      
      this.animatedElements.forEach((el) => {
        el.style.opacity = '0';
        observer.observe(el);
      });
    }
  }

  // ==========================================================================
  // FAQ ACCORDION
  // ==========================================================================
  class FAQAccordion {
    constructor() {
      this.items = document.querySelectorAll('.faq-item');
      if (!this.items.length) return;
      
      this.init();
    }
    
    init() {
      this.items.forEach((item) => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => this.toggle(item));
      });
    }
    
    toggle(item) {
      const isActive = item.classList.contains('active');
      
      // Close all items
      this.items.forEach((i) => i.classList.remove('active'));
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    }
  }

  // ==========================================================================
  // MODAL SYSTEM
  // ==========================================================================
  class Modal {
    constructor() {
      this.modals = document.querySelectorAll('.modal-overlay');
      this.triggers = document.querySelectorAll('[data-modal]');
      
      if (!this.modals.length || !this.triggers.length) return;
      
      this.init();
    }
    
    init() {
      // Open modal triggers
      this.triggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          const modalId = trigger.dataset.modal;
          this.open(modalId);
        });
      });
      
      // Close modal triggers
      this.modals.forEach((modal) => {
        modal.addEventListener('click', (e) => {
          if (e.target === modal || e.target.classList.contains('modal-close')) {
            this.close(modal);
          }
        });
      });
      
      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeAll();
        }
      });
    }
    
    open(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
    
    close(modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    closeAll() {
      this.modals.forEach((modal) => this.close(modal));
    }
  }

  // ==========================================================================
  // GROUP BOOKING SELECTOR
  // ==========================================================================
  class GroupBooking {
    constructor() {
      this.container = document.querySelector('.group-booking');
      if (!this.container) return;
      
      this.buttons = this.container.querySelectorAll('.group-size-btn');
      this.input = this.container.querySelector('input[name="group_size"]');
      
      this.init();
    }
    
    init() {
      this.buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
          this.buttons.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          
          if (this.input) {
            this.input.value = btn.dataset.size;
          }
          
          // Trigger custom event
          this.container.dispatchEvent(new CustomEvent('groupSizeChanged', {
            detail: { size: btn.dataset.size }
          }));
        });
      });
    }
  }

  // ==========================================================================
  // MEMBERSHIP TIER CARDS HOVER EFFECT
  // ==========================================================================
  class MembershipCards {
    constructor() {
      this.cards = document.querySelectorAll('.membership-card');
      if (!this.cards.length) return;
      
      this.init();
    }
    
    init() {
      this.cards.forEach((card) => {
        card.addEventListener('mouseenter', () => this.handleHover(card, true));
        card.addEventListener('mouseleave', () => this.handleHover(card, false));
      });
    }
    
    handleHover(card, isHovering) {
      if (isHovering) {
        // Add warm glow animation
        card.style.animation = 'warmPulse 2s ease-in-out infinite';
      } else {
        card.style.animation = '';
      }
    }
  }

  // ==========================================================================
  // EXPERIENCE CARDS - SOCIAL BOOKING LOGIC
  // ==========================================================================
  class ExperienceCards {
    constructor() {
      this.cards = document.querySelectorAll('.experience-card');
      if (!this.cards.length) return;
      
      this.init();
    }
    
    init() {
      this.cards.forEach((card) => {
        const bookBtn = card.querySelector('.btn');
        if (bookBtn) {
          bookBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const experienceId = card.dataset.experienceId;
            const allowsGroup = card.dataset.allowsGroup === 'true';
            
            if (allowsGroup) {
              this.openGroupBookingModal(experienceId);
            } else {
              this.openSingleBookingModal(experienceId);
            }
          });
        }
      });
    }
    
    openGroupBookingModal(experienceId) {
      // Trigger modal with group booking options
      const event = new CustomEvent('openBookingModal', {
        detail: { 
          experienceId, 
          type: 'group' 
        }
      });
      document.dispatchEvent(event);
    }
    
    openSingleBookingModal(experienceId) {
      const event = new CustomEvent('openBookingModal', {
        detail: { 
          experienceId, 
          type: 'single' 
        }
      });
      document.dispatchEvent(event);
    }
  }

  // ==========================================================================
  // VIDEO HERO AUTOPLAY HANDLING
  // ==========================================================================
  class VideoHero {
    constructor() {
      this.video = document.querySelector('.hero-video');
      if (!this.video) return;
      
      this.init();
    }
    
    init() {
      // Ensure video plays on load
      this.video.play().catch(() => {
        // Autoplay blocked, add play button overlay
        this.addPlayButton();
      });
      
      // Pause when not visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.video.play();
            } else {
              this.video.pause();
            }
          });
        },
        { threshold: 0.25 }
      );
      
      observer.observe(this.video);
    }
    
    addPlayButton() {
      const playBtn = document.createElement('button');
      playBtn.className = 'hero-play-btn';
      playBtn.innerHTML = `
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="29" stroke="currentColor" stroke-width="2"/>
          <path d="M24 20L44 30L24 40V20Z" fill="currentColor"/>
        </svg>
      `;
      playBtn.addEventListener('click', () => {
        this.video.play();
        playBtn.remove();
      });
      
      this.video.parentElement.appendChild(playBtn);
    }
  }

  // ==========================================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================================================
  class SmoothScroll {
    constructor() {
      this.links = document.querySelectorAll('a[href^="#"]');
      if (!this.links.length) return;
      
      this.init();
    }
    
    init() {
      this.links.forEach((link) => {
        link.addEventListener('click', (e) => {
          const targetId = link.getAttribute('href');
          if (targetId === '#') return;
          
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    }
  }

  // ==========================================================================
  // CREDIT CALCULATOR
  // ==========================================================================
  class CreditCalculator {
    constructor() {
      this.display = document.querySelector('.credit-display');
      this.experienceSelectors = document.querySelectorAll('[data-credit-cost]');
      
      if (!this.display || !this.experienceSelectors.length) return;
      
      this.totalCredits = 0;
      this.memberCredits = parseInt(this.display.dataset.memberCredits || 0);
      
      this.init();
    }
    
    init() {
      this.experienceSelectors.forEach((selector) => {
        selector.addEventListener('change', () => this.calculate());
      });
      
      this.updateDisplay();
    }
    
    calculate() {
      this.totalCredits = 0;
      
      this.experienceSelectors.forEach((selector) => {
        if (selector.checked || selector.value > 0) {
          const cost = parseInt(selector.dataset.creditCost);
          const quantity = selector.type === 'checkbox' ? 1 : parseInt(selector.value);
          this.totalCredits += cost * quantity;
        }
      });
      
      this.updateDisplay();
    }
    
    updateDisplay() {
      const remaining = this.memberCredits - this.totalCredits;
      this.display.innerHTML = `
        <span class="credits-used">${this.totalCredits} credits used</span>
        <span class="credits-remaining ${remaining < 0 ? 'negative' : ''}">${remaining} remaining</span>
      `;
    }
  }

  // ==========================================================================
  // NAVIGATION DROPDOWN
  // ==========================================================================
  class NavDropdown {
    constructor() {
      this.dropdowns = document.querySelectorAll('.nav-dropdown');
      if (!this.dropdowns.length) return;
      
      this.init();
    }
    
    init() {
      this.dropdowns.forEach((dropdown) => {
        const trigger = dropdown.querySelector('.nav-link');
        const content = dropdown.querySelector('.nav-dropdown-content');
        
        // Touch device support
        trigger.addEventListener('click', (e) => {
          if (window.innerWidth <= 1024) {
            e.preventDefault();
            dropdown.classList.toggle('active');
          }
        });
      });
      
      // Close dropdowns when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
          this.dropdowns.forEach((d) => d.classList.remove('active'));
        }
      });
    }
  }

  // ==========================================================================
  // INITIALIZE ALL MODULES
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    new WarmGlowCursor();
    new HeaderScroll();
    new ScrollAnimations();
    new FAQAccordion();
    new Modal();
    new GroupBooking();
    new MembershipCards();
    new ExperienceCards();
    new VideoHero();
    new SmoothScroll();
    new CreditCalculator();
    new NavDropdown();
    
    // Log initialization
    console.log('🌿 Breathe Wellness Sanctuary - Theme Initialized');
  });
})();







