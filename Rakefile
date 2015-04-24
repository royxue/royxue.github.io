require 'time'

desc 'create a new draft post'
task :post do
  title = ENV['TITLE']
  slug = "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"
  slug_s = "#{title.downcase.gsub(/[^\w]+/, '-')}"
  datee = "#{DateTime.now}".gsub!('T',' ')

  file = File.join(
    File.dirname(__FILE__),
    '_posts/blog',
    slug + '.markdown'
  )

  File.open(file, "w") do |f|
    f << <<-EOS.gsub(/^    /, '')
    ---
    author: xljroy
    comments: true
    date: #{datee}
    layout: post
    slug: #{slug_s}
    title: #{title}
    categories:
    - blog
    tags:
    ---

    EOS
  end

  system ("#{ENV['EDITOR']} #{file}")
end

task :gallery do
  title = ENV['TITLE']
  slug = "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"
  slug_s = "#{title.downcase.gsub(/[^\w]+/, '-')}"
  datee = "#{DateTime.now}".gsub!('T',' ')

  file = File.join(
    File.dirname(__FILE__),
    '_posts/gallery',
    slug + '.markdown'
  )

  File.open(file, "w") do |f|
    f << <<-EOS.gsub(/^    /, '')
    ---
    author: xljroy
    date: #{datee}
    layout: gallery
    slug: #{slug_s}
    title: #{title}
    img:
    memo:
    categories:
    - gallery
    ---

    EOS
  end

  system ("#{ENV['EDITOR']} #{file}")
end