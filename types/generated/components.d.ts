import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    description: '';
    displayName: 'navbar';
    icon: 'house';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['trasnparent', 'white', 'blue']
    >;
    ctaButtons: Schema.Attribute.Component<'ui.cta-button', true> &
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
    features: Schema.Attribute.Component<'ui.feature-item', true>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'briefcase';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['white', 'gradient']> &
      Schema.Attribute.DefaultTo<'gradient'>;
    backgroundImage: Schema.Attribute.Media<'images' | 'files'>;
    bottomImage: Schema.Attribute.Media<'images'>;
    bottomImageAlt: Schema.Attribute.String;
    ctaButtons: Schema.Attribute.Component<'ui.cta-button', true>;
    description: Schema.Attribute.Text;
    seoConfig: Schema.Attribute.Component<'seo.seo-config', false>;
    subtitle: Schema.Attribute.String;
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
    description: '';
    displayName: 'cta-button';
    icon: 'command';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['default', 'outline', 'ghost']>;
  };
}

export interface UiDropdownCategory extends Struct.ComponentSchema {
  collectionName: 'components_ui_dropdown_categories';
  info: {
    displayName: 'dropdown-category';
    icon: 'archive';
  };
  attributes: {
    categoryId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    items: Schema.Attribute.Component<'ui.dropdown-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiDropdownFooterAction extends Struct.ComponentSchema {
  collectionName: 'components_ui_dropdown_footer_actions';
  info: {
    displayName: 'dropdown-footer-action';
    icon: 'archive';
  };
  attributes: {
    footerActionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiDropdownItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_dropdown_items';
  info: {
    displayName: 'dropdown-item';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    dropdownItemId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_feature_items';
  info: {
    displayName: 'feature-item';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface UiNavItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_nav_items';
  info: {
    description: '';
    displayName: 'nav-item';
    icon: 'apps';
  };
  attributes: {
    dropdownCategories: Schema.Attribute.Component<
      'ui.dropdown-category',
      true
    >;
    dropdownFooterActions: Schema.Attribute.Component<
      'ui.dropdown-footer-action',
      true
    >;
    hasDropdown: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
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
      'ui.dropdown-category': UiDropdownCategory;
      'ui.dropdown-footer-action': UiDropdownFooterAction;
      'ui.dropdown-item': UiDropdownItem;
      'ui.feature-item': UiFeatureItem;
      'ui.nav-item': UiNavItem;
    }
  }
}
