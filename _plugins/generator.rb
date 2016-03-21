require 'jekyll'

module PIF
  module AppsGov
    class AppPage < ::Jekyll::Page
      def initialize(site, product_info)
        @site = site
        @base = site.source
        @dir = "products/#{product_info['slug']}"
        @name = 'index.html'

        process(name)
        read_yaml(File.join(@base, '_layouts'), 'product.html')
        @data = @data.merge('product_info' => product_info)
        @data['title'] = product_info['name']
        @data['excerpt'] = product_info['short_description']
        @data['img'] = product_info['logo_url']
        @data['twitter'] = product_info['twitter_handle']
        @data['tags'] = (product_info['top_keywords'] || []) +
          (product_info['tags'] || [])
      end
    end

    class Generator < ::Jekyll::Generator
      def generate(site)
        site.data['products'].each do |product_slug, product_info|
          site.pages << AppPage.new(site, product_info)
        end
      end
    end
  end
end
