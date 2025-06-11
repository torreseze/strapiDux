import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'navbar';
    icon: 'house';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['trasnparent', 'white', 'blue']
    >;
    ctaButton: Schema.Attribute.Component<'ui.cta-button', false> &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    logoAlt: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Dux Software'>;
    logoHeight: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<40>;
    logoHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    logoWidth: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<120>;
    navItems: Schema.Attribute.Component<'ui.nav-item', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionsContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_contents';
  info: {
    description: '';
    displayName: 'content';
    icon: 'brush';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['white', 'blue', 'transparent']
    >;
    containerSize: Schema.Attribute.Enumeration<['sm', 'md', 'lg', 'xl']>;
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    ctaButton: Schema.Attribute.Component<'ui.cta-button', false>;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    seoHeadingLevel: Schema.Attribute.Enumeration<['h1', 'h2', 'h3', 'h4']>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
    icon: 'briefcase';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['white', 'blue', 'gradient']
    >;
    backgroundImage: Schema.Attribute.Media<'images' | 'files'>;
    containerSize: Schema.Attribute.Enumeration<
      ['sm', 'md', 'lg', 'xl', 'full']
    >;
    ctaButtons: Schema.Attribute.Component<'ui.cta-button', true>;
    description: Schema.Attribute.Text;
    seoConfig: Schema.Attribute.Component<'seo.seo-config', false>;
    subtitle: Schema.Attribute.String;
    textAlignment: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoSeoConfig extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_configs';
  info: {
    displayName: 'seo-config';
  };
  attributes: {
    canonical: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    keywords: Schema.Attribute.String;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface UiCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_cta_buttons';
  info: {
    displayName: 'cta-button';
    icon: 'command';
  };
  attributes: {
    ctaButtonId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['default', 'outline', 'ghost']>;
  };
}

export interface UiNavItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_nav_items';
  info: {
    displayName: 'nav-item';
    icon: 'apps';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    navItemId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.navbar': LayoutNavbar;
      'sections.content': SectionsContent;
      'sections.hero': SectionsHero;
      'seo.seo-config': SeoSeoConfig;
      'ui.cta-button': UiCtaButton;
      'ui.nav-item': UiNavItem;
    }
  }
}
