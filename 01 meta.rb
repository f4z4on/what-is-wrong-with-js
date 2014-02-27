o = Object.new
class << o
  def baz; 8675309; end
end
# That's it. Everything from the outside of object is a
# method. There's no need for descriptor.
#
# Alt:
class << o
  attr_reader :baz
end
o.instance_variable_set :@baz, 8675309

# Bonuses:
o.singleton_methods

# This is reflection!
