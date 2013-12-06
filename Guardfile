guard :concat, :type => "css", :files => %w[main], :input_dir => "public/css", :output => "public/css/styles.min"

guard :concat, :type => "js", :files => %w[vendors/jquery-1.9.1.min vendors/handlebars vendors/ember-1.0.0-rc.2 vendors/ember-data app/app app/store app/router app/models/paste app/controllers/fork app/routes/index app/routes/new app/routes/fork app/views/new app/views/show app/views/fork templates.js/application templates.js/fork templates.js/new templates.js/show templates.js/_logo], :input_dir => "public/js", :output => "public/js/scripts.min"

# Refresh the browser on save
guard 'livereload' do
  watch(%r{.+(?<!\.min)\.(css|html|js|blade\.php)$})
end

guard :phpunit, :all_on_start => false, :tests_path => 'app/tests/', :cli => '--colors -c phpunit.xml' do
  # Run any test in app/tests upon save.
  watch(%r{^.+Test\.php$})

  # When a view file is updated, run tests.
  # Tip: you probably only want to run your integration tests.
  watch(%r{app/views/.+\.php}) { Dir.glob('app/tests/**/*.php') }

  # When a file is edited, try to run its associated test.
  # Save app/models/User.php, and it will run app/tests/models/UserTest.php
  watch(%r{^app/(.+)/(.+)\.php$}) { |m| "app/tests/#{m[1]}/#{m[2]}Test.php"}
end

module ::Guard
  class Refresher < Guard
    def run_all
      # refresh
    end

    def run_on_additions(paths)
      refresh
    end

    def run_on_removals(paths)
      refresh
    end

    def refresh
      `php artisan guard:refresh`
    end
  end
end

require 'cssmin'
require 'jsmin'

guard :refresher do
  watch(%r[public/js/.+])
  watch(%r[public/css/.+])
  watch(%r{app/config/packages/way/guard-laravel/guard.php}) do |m|
    `php artisan guard:refresh`
  end
  watch('public/css/styles.min.css') do |m|
    css = File.read(m[0])
    File.open(m[0], 'w') { |file| file.write(CSSMin.minify(css)) }
  end
  watch('public/js/scripts.min.js') do |m|
    js = File.read(m[0])
    File.open(m[0], 'w') { |file| file.write(JSMin.minify(js)) }
  end
end

guard 'handlebars' do
  watch(/^.+(\.handlebars)$/)
end

guard 'handlebars', :input => 'public/js/app/templates', :output => 'public/js/templates.js', :emberjs => true

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }
#
guard 'shell' do
  watch(/(.*).txt/) {|m| `tail #{m[0]}` }
end
