source "https://rubygems.org"

gem "minima", "~> 2.0"

gem 'bigdecimal'

gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2.0", :install_if => Gem.win_platform?
gem "kramdown-parser-gfm"
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]