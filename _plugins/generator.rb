require 'jekyll'

module PIF
  module AppsGov
    class AppPage < ::Jekyll::Page
      def initialize(site, app_info)
        @site = site
        @base = site.source
        @dir = "apps/#{app_info['slug']}"
        @name = 'index.html'

        process(name)
        read_yaml(File.join(@base, '_layouts'), 'app.html')
        @data = @data.merge('app_info' => app_info)
        @data['title'] = app_info['name']
      end
    end

    class Generator < ::Jekyll::Generator
      def generate(site)
        site.data['apps'].each do |app_slug, app_info|
          site.pages << AppPage.new(site, app_info)
        end
      end
    end
  end
end
