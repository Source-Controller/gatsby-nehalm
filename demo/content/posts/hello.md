---
title: The mighiest of them all
path: "/mighty-post"
tags: ["I have no idea"]
featuredImage: "../assets/images/test.jpg"
excerpt: This is a post about magic. It's about I don't knows and even the I have no ideas. It's great, believe me. You know why? Because it is written.
created: 2019-07-27
updated: 2019-07-27
---

One of the first things most developers learn when starting programming are `if`/`else` conditions. And even though the importance of conditions remain the same throughout your work, you don't actually need the `else` branch most of the time.

If you've ever worked with modern linting tools you may get a warning like

> An if expression with an else branch is never necessary

You may wonder why this warning exists, so let's take a closer look why this warning exists and how to actually live without an `else` branch.

## Think the other way round

Let's say you've got a function which retrieves users from an API - but only if the user is admin, otherwise the function throws an exception.

```php
public function getUser(UserAPI $api)
{
    if ($this->currentUser->isAdmin()) {
        return $api->getAllUser();
    } else {
        throw new AccessDeniedException();
    }
}
```

Every level of nesting means additional complexity. In order to keep our (and the people we work with) sanity at a stable level we strive for simplicity. To achieve this we can simply turn around the way our condition works and make this function easier to follow.

```php
public function getUser(UserAPI $api)
{
    if (! $this->currentUser->isAdmin()) {
        throw new AccessDeniedException();
    }
    
    // Our code never reaches this line if the currentUser is no admin
    return $api->getAllUser();
}
```

By simply _inverting_ our `if` condition we were able to get rid of the `else` and made the method easier to follow.

Let's take a look at another example: let's assume we've got a class which is responsible for storing and reading setting values from our database. To avoid unnecessary queries we cache already queried values to make our application faster. Last but not least we want to have a fallback value we want to return in case a value doesn't exist:

```php
public function get($key, $default = null)
{
    if (! isset($this->cache[$key]) {
        // Key not cached yet, try to find him in the database
        $setting = $this->objectManager->getRepository(Setting::class)->findBy(['key' => $key]);
        if ($setting) {
            // Key found in the database, cache and return it
            $this->cache[$key] = $settings->getValue();
            return $setting->getValue();
        } else {
            // Key was not in the database, return the fallback value
            return $default;
        }
    } else {
        // Key has already been cached
        return $this->cache[$key];
    }
}
```

Such an easy method, yet not the easiest one to follow. But we could simply invert our conditions again and get the following:

```php
public function get($key, $default = null)
{
    if (isset($this->cache[$key])) {
        // If the key has already been cached we can simply return it from there
        return $this->cache[$key];
    }
    
    // Since our key was not in the cache let's try to find it in the database
    $setting = $this->objectManager->getRepository(Setting::class)->findBy(['key' => $key]);
    if ($setting) {
        $this->cache[$key] = $setting->getValue;
        return $setting->getValue;
    }
    
    // Key was neither found in the cache nor in the database, return the fallback value
    return $default;
}
```

Again we've elimated unnecessary indentation depth (and hence we've reduced complexity) by simply getting rid of our `else` branch.

To summarize these examples just keep in mind that `return` and `throw` exits the function, meaning everything below can be considered as an `else` branch. This might force you to split methods (or wherever else you want to eliminate your `else` branch) into smaller methods, but due to _readability, maintainability and testability_ this is an actually desirable consequence.

## Conclusion

This post may seem obivous for many people, but sometimes a small hint is required to get a different perspective on something. This post tries to give you such a hint for something as trivial as `if` conditions by simply removing something which may be considered essential. And by simply removing some of our code we actually increase readability, reduce complexity and make it easier to follow without losing any actual functionality.
